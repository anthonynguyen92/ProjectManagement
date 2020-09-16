using Microsoft.EntityFrameworkCore.Migrations;

namespace doan.ProjectManagement.Migrations
{
    public partial class updatestudentservice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectInformation_StudentGroup_StudentGroupId",
                table: "ProjectInformation");

            migrationBuilder.DropIndex(
                name: "IX_ProjectInformation_StudentGroupId",
                table: "ProjectInformation");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ProjectInformation_StudentGroupId",
                table: "ProjectInformation",
                column: "StudentGroupId",
                unique: true,
                filter: "[StudentGroupId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectInformation_StudentGroup_StudentGroupId",
                table: "ProjectInformation",
                column: "StudentGroupId",
                principalTable: "StudentGroup",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
