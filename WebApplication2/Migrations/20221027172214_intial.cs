using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UfoFinal.Migrations
{
    public partial class intial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Personer",
                columns: table => new
                {
                    PersonID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fornavn = table.Column<string>(type: "TEXT", nullable: false),
                    Etternavn = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personer", x => x.PersonID);
                });

            migrationBuilder.CreateTable(
                name: "Steder",
                columns: table => new
                {
                    StedID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    adress = table.Column<string>(type: "TEXT", nullable: false),
                    by = table.Column<string>(type: "TEXT", nullable: false),
                    land = table.Column<string>(type: "TEXT", nullable: false),
                    dato = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Steder", x => x.StedID);
                });

            migrationBuilder.CreateTable(
                name: "observasjoner",
                columns: table => new
                {
                    ObservasjonID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StedID = table.Column<int>(type: "INTEGER", nullable: false),
                    PersonID = table.Column<int>(type: "INTEGER", nullable: false),
                    Beskrivelse = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_observasjoner", x => x.ObservasjonID);
                    table.ForeignKey(
                        name: "FK_observasjoner_Personer_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Personer",
                        principalColumn: "PersonID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_observasjoner_Steder_StedID",
                        column: x => x.StedID,
                        principalTable: "Steder",
                        principalColumn: "StedID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_observasjoner_PersonID",
                table: "observasjoner",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_observasjoner_StedID",
                table: "observasjoner",
                column: "StedID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "observasjoner");

            migrationBuilder.DropTable(
                name: "Personer");

            migrationBuilder.DropTable(
                name: "Steder");
        }
    }
}
