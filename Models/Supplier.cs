using System;
using System.ComponentModel.DataAnnotations;

namespace pos_system.Models
{
    public class Supplier
{
    public int Id  { get; set; };

    public string supplierName  { get; set; };

    public string companyName  { get; set; };

    public string email  { get; set; };

    public int phoneNumber  { get; set; };

    public string address  { get; set; };

}
}
