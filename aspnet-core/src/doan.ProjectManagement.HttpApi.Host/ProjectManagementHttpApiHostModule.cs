using Abp.Threading;
using doan.ProjectManagement.EntityFrameworkCore;
using doan.ProjectManagement.MultiTenancy;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp;
using Volo.Abp.Account.Web;
using Volo.Abp.AspNetCore.Authentication.JwtBearer;
using Volo.Abp.AspNetCore.MultiTenancy;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AspNetCore.Serilog;
using Volo.Abp.Auditing;
using Volo.Abp.Autofac;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.IdentityServer.Jwt;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;

namespace doan.ProjectManagement
{
    [DependsOn(
        typeof(ProjectManagementHttpApiModule),
        typeof(AbpAutofacModule),
        typeof(AbpAspNetCoreMultiTenancyModule),
        typeof(ProjectManagementApplicationModule),
        typeof(ProjectManagementEntityFrameworkCoreDbMigrationsModule),
        typeof(AbpAspNetCoreMvcUiBasicThemeModule),
        typeof(AbpAspNetCoreAuthenticationJwtBearerModule),
        typeof(AbpAccountWebIdentityServerModule),
        typeof(AbpAspNetCoreSerilogModule)
        )]
    public class ProjectManagementHttpApiHostModule : AbpModule
    {
        private const string DefaultCorsPolicyName = "Default";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();
            var hostingEnvironment = context.Services.GetHostingEnvironment();

            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(ProjectManagementApplicationModule).Assembly, opts =>
                {
                    opts.RootPath = "projectmanagement";
                });
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Languages.Add(new LanguageInfo("en", "en", "English", "famfamfam-flags gb"));
                options.Languages.Add(new LanguageInfo("vi", "vi", "Tiếng Việt", "famfamfam-flags vn"));
            });

            context.Services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = configuration["AuthServer:Authority"];
                    options.ApiName = configuration["AuthServer:ApiName"];
                    options.RequireHttpsMetadata = true;
                });

            context.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "Project Management API", Version = "v1" });
                options.DocInclusionPredicate((docName, description) => true);
                options.CustomSchemaIds(type => type.FullName);

                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"Standard Authorization header using the Bearer scheme. Enter 'Bearer' [space] and then your token in the text input below.Exa mple: 'Bearer 12aer12331'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header,
                        },
                        new List<string>()
                    }
                });
            });

            Configure<AbpMultiTenancyOptions>(options =>
            {
                options.IsEnabled = true;
            });

            Configure<AbpDbContextOptions>(options =>
            {
                options.UseSqlServer();
            });

            Configure<AbpAuditingOptions>(options =>
            {
                options.IsEnabledForGetRequests = true;
                options.ApplicationName = "ProjectService";
            });

            ConfigureCors(context, configuration);

        }

        private void ConfigureCors(ServiceConfigurationContext context, IConfiguration configuration)
        {
            context.Services.AddCors(options =>
            {
                options.AddPolicy(DefaultCorsPolicyName, builder =>
                {
                    builder
                        .WithOrigins(
                            configuration["App:CorsOrigins"]
                                .Split(",", StringSplitOptions.RemoveEmptyEntries)
                                .Select(o => o.RemovePostFix("/"))
                                .ToArray()
                        )
                        .WithAbpExposedHeaders()
                        .SetIsOriginAllowedToAllowWildcardSubdomains()
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();
            var env = context.GetEnvironment();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseErrorPage();
            }

            app.UseCorrelationId();
            app.UseVirtualFiles();
            app.UseCors(DefaultCorsPolicyName);
            app.UseRouting();
            app.UseAuthentication();
            app.UseJwtTokenMiddleware();
            app.UseAbpClaimsMap();

            if (MultiTenancyConsts.IsEnabled)
            {
                app.UseMultiTenancy();
            }

            app.UseAbpRequestLocalization(); //TODO: localization?
            app.UseIdentityServer();
            app.UseAuthorization();

            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Project Management API");
            });
            app.UseAuditing();
            app.UseConfiguredEndpoints();
        }
    }
}
