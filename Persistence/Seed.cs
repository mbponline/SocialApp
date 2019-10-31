using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Restaurants.Any())
            {
                var restaurants = new List<Restaurant>
                {
                    new Restaurant
                    {
                    Name = "Luise",
                    Phone = "030-8418880",
                    Url = "www.luise-dahlem.de",
                    Address = "Luise-strasse 40-42",
                    UbahnStation = "Dahlem-Dorf",
                    Description = "Pizza and scrumptious breakfasts"
                    },
                    new Restaurant
                    {
                    Name = "Ristorante Galileo",
                    Phone = "030-831 2377",
                    Url = "www.ristorantegalileo.de",
                    Address = "Otto-von-Simson-Strasse 26",
                    UbahnStation = "Dahlem-Dorf",
                    Description = "Homemade pasta and daily specials"
                    }

                };

                context.Restaurants.AddRange(restaurants);
                context.SaveChanges();



            }
        }
        
    }
}