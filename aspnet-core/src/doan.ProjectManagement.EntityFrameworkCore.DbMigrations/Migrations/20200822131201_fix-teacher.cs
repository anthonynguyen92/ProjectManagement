using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class fixteacher : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "StudentGroupInformation");

            migrationBuilder.DropColumn(
                name: "DeleterUserId",
                table: "StudentGroupInformation");

            migrationBuilder.DropColumn(
                name: "LastModifierUserId",
                table: "StudentGroupInformation");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "StudentGroupInformation",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "StudentGroupInformation",
                maxLength: 40,
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CreatorId",
                table: "StudentGroupInformation",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "DeleterId",
                table: "StudentGroupInformation",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ExtraProperties",
                table: "StudentGroupInformation",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "LastModifierId",
                table: "StudentGroupInformation",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "StudentGroupInformation");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "StudentGroupInformation");

            migrationBuilder.DropColumn(
                name: "DeleterId",
                table: "StudentGroupInformation");

            migrationBuilder.DropColumn(
                name: "ExtraProperties",
                table: "StudentGroupInformation");

            migrationBuilder.DropColumn(
                name: "LastModifierId",
                table: "StudentGroupInformation");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "StudentGroupInformation",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldDefaultValue: false);

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "StudentGroupInformation",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DeleterUserId",
                table: "StudentGroupInformation",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "LastModifierUserId",
                table: "StudentGroupInformation",
                type: "bigint",
                nullable: true);
        }
    }
}
