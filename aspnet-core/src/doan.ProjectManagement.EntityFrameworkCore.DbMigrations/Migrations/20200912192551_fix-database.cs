using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class fixdatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "DeleterUserId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "LastModifierUserId",
                table: "Project");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "Project",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "Project",
                maxLength: 40,
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CreatorId",
                table: "Project",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "DeleterId",
                table: "Project",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ExtraProperties",
                table: "Project",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "LastModifierId",
                table: "Project",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "DeleterId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "ExtraProperties",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "LastModifierId",
                table: "Project");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "Project",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldDefaultValue: false);

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "Project",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DeleterUserId",
                table: "Project",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "LastModifierUserId",
                table: "Project",
                type: "bigint",
                nullable: true);
        }
    }
}
