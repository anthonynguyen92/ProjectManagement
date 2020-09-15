using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class Add_Projec_ProjectInformation_ProjectRequired_Tables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ProjectInformationId",
                table: "Teacher.Teacher",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Project",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<long>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    ProjectName = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Level = table.Column<int>(nullable: false),
                    NumberOfTeamRegister = table.Column<int>(nullable: true),
                    LimitSubscriptions = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProjectInformation",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<long>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    ProjectId = table.Column<Guid>(nullable: true),
                    StudentGroupId = table.Column<Guid>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: true),
                    ExpiredDate = table.Column<DateTime>(nullable: true),
                    EmailContact = table.Column<string>(nullable: true),
                    Mark = table.Column<double>(nullable: true),
                    Source = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectInformation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProjectInformation_Project_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Project",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProjectInformation_StudentGroup_StudentGroupId",
                        column: x => x.StudentGroupId,
                        principalTable: "StudentGroup",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProjectRequest",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<long>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    NameRequest = table.Column<string>(nullable: true),
                    RequiredLevel = table.Column<int>(nullable: false),
                    StatusRequired = table.Column<int>(nullable: false),
                    ProjectInformationId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectRequest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProjectRequest_ProjectInformation_ProjectInformationId",
                        column: x => x.ProjectInformationId,
                        principalTable: "ProjectInformation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Teacher.Teacher_ProjectInformationId",
                table: "Teacher.Teacher",
                column: "ProjectInformationId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectInformation_ProjectId",
                table: "ProjectInformation",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectInformation_StudentGroupId",
                table: "ProjectInformation",
                column: "StudentGroupId",
                unique: true,
                filter: "[StudentGroupId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectRequest_ProjectInformationId",
                table: "ProjectRequest",
                column: "ProjectInformationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Teacher.Teacher_ProjectInformation_ProjectInformationId",
                table: "Teacher.Teacher",
                column: "ProjectInformationId",
                principalTable: "ProjectInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teacher.Teacher_ProjectInformation_ProjectInformationId",
                table: "Teacher.Teacher");

            migrationBuilder.DropTable(
                name: "ProjectRequest");

            migrationBuilder.DropTable(
                name: "ProjectInformation");

            migrationBuilder.DropTable(
                name: "Project");

            migrationBuilder.DropIndex(
                name: "IX_Teacher.Teacher_ProjectInformationId",
                table: "Teacher.Teacher");

            migrationBuilder.DropColumn(
                name: "ProjectInformationId",
                table: "Teacher.Teacher");
        }
    }
}
