using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class update_ProjectInformation_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teacher.Teacher_ProjectInformation_ProjectInformationId",
                table: "Teacher.Teacher");

            migrationBuilder.DropIndex(
                name: "IX_Teacher.Teacher_ProjectInformationId",
                table: "Teacher.Teacher");

            migrationBuilder.DropColumn(
                name: "ProjectInformationId",
                table: "Teacher.Teacher");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "DeleterUserId",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "LastModifierUserId",
                table: "ProjectInformation");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "ProjectInformation",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "ProjectInformation",
                maxLength: 40,
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CreatorId",
                table: "ProjectInformation",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "DeleterId",
                table: "ProjectInformation",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ExtraProperties",
                table: "ProjectInformation",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "LastModifierId",
                table: "ProjectInformation",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProjectName",
                table: "ProjectInformation",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StudentGroupName",
                table: "ProjectInformation",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "CreatorId",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "DeleterId",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "ExtraProperties",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "LastModifierId",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "ProjectName",
                table: "ProjectInformation");

            migrationBuilder.DropColumn(
                name: "StudentGroupName",
                table: "ProjectInformation");

            migrationBuilder.AddColumn<Guid>(
                name: "ProjectInformationId",
                table: "Teacher.Teacher",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "ProjectInformation",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldDefaultValue: false);

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "ProjectInformation",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DeleterUserId",
                table: "ProjectInformation",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "LastModifierUserId",
                table: "ProjectInformation",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Teacher.Teacher_ProjectInformationId",
                table: "Teacher.Teacher",
                column: "ProjectInformationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Teacher.Teacher_ProjectInformation_ProjectInformationId",
                table: "Teacher.Teacher",
                column: "ProjectInformationId",
                principalTable: "ProjectInformation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
