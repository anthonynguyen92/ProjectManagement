using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class adddescriptionteacherinformationgroup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MyProperty",
                table: "TeacherInformationGroup");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "TeacherInformationGroup",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "TeacherInformationGroup");

            migrationBuilder.AddColumn<string>(
                name: "MyProperty",
                table: "TeacherInformationGroup",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
