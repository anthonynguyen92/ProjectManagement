using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class updateteacherinformation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TeacherInformationGroup_Teacher.Teacher_TeacherId",
                table: "TeacherInformationGroup");

            migrationBuilder.DropIndex(
                name: "IX_TeacherInformationGroup_TeacherId",
                table: "TeacherInformationGroup");

            migrationBuilder.AddColumn<Guid>(
                name: "ProjectInformationId",
                table: "TeacherInformationGroup",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProjectInformationId",
                table: "TeacherInformationGroup");

            migrationBuilder.CreateIndex(
                name: "IX_TeacherInformationGroup_TeacherId",
                table: "TeacherInformationGroup",
                column: "TeacherId");

            migrationBuilder.AddForeignKey(
                name: "FK_TeacherInformationGroup_Teacher.Teacher_TeacherId",
                table: "TeacherInformationGroup",
                column: "TeacherId",
                principalTable: "Teacher.Teacher",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
