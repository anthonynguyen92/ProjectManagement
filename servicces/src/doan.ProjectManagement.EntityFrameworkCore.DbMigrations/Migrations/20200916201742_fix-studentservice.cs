using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class fixstudentservice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectInformation_Project_ProjectId",
                table: "ProjectInformation");

            migrationBuilder.DropIndex(
                name: "IX_ProjectInformation_ProjectId",
                table: "ProjectInformation");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ProjectInformation_ProjectId",
                table: "ProjectInformation",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectInformation_Project_ProjectId",
                table: "ProjectInformation",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
