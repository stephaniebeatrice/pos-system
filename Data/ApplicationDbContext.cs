using Microsoft.EntityFrameworkCore;
using pos_system.Models;

namespace pos_system.Data
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Product> Products { get; set; } 

         public virtual DbSet<Supplier> Suppliers { get; set; } 
        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().ToTable("Product");
            modelBuilder.Entity<Supplier>().ToTable("Supplier");
        }
    }
}