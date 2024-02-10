using System;
using System.ComponentModel.DataAnnotations;

namespace pos_system.Models
{
    public class Product
    {
        public int Id { get; set; }

        public int BarcodeScanner { get; set; }

        public string Batch { get; set; }

        public string Name { get; set; }
        [Required]

        public string Description { get; set; }

        public decimal CostPrice { get; set; }

        public decimal SellingPrice { get; set; }

        public int Quantity { get; set; }

        public int Suppliers { get; set; }

        public int Category { get; set; }

        public DateTime ManufacturingDate { get; set; }

        public DateTime ExpiringDate { get; set; }
    }

}
