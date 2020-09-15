using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class fix_student_column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StundentCode",
                table: "Student.Student");

            migrationBuilder.AddColumn<string>(
                name: "StudentCode",
                table: "Student.Student",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudentCode",
                table: "Student.Student");

            migrationBuilder.AddColumn<string>(
                name: "StundentCode",
                table: "Student.Student",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
