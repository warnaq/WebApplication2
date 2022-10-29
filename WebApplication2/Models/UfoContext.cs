using Microsoft.EntityFrameworkCore;

namespace UfoFinal.Models
{
    public class UfoContext : DbContext
    {
        /*public UfoContext(DbContextOptions<UfoContext> options) : base(options)
        {
            Database.EnsureCreated(); */
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // connect to sqlite database
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\senai\OneDrive\Skrivebord\UfoFinal\UfoFinal\DB\Ufo.db");
        }

        public DbSet<Person> Personer { get; set; }
        public DbSet<Sted> Steder { get; set; }
        public DbSet<Observasjon> observasjoner { get; set; }

    }
}
