using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Restaurants
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string Phone { get; set; }
            public string Url { get; set; }
            public string Address { get; set; }
            public string UbahnStation { get; set; }
            public string Description { get; set; }
        }
                public class Handler : IRequestHandler<Command>
                {
                    public DataContext _context { get; }
                    public Handler(DataContext context)
                    {
                        _context = context;
                    }
        
                    public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                    {
        
                        var restaurant = await _context.Restaurants.FindAsync(request.Id);


                        if(restaurant == null)
                        {
                            throw new Exception("Could not find restaurant");
                        }

                        restaurant.Name = request.Name ?? restaurant.Name;
                        restaurant.Phone = request.Phone ?? restaurant.Phone;
                        restaurant.Url = request.Url ?? restaurant.Url;
                        restaurant.Address = request.Address ?? restaurant.Address;
                        restaurant.UbahnStation = request.UbahnStation ?? restaurant.UbahnStation;
                        restaurant.Description = request.Description ?? restaurant.Description;
                        

                        var success = await _context.SaveChangesAsync() > 0;
        
                        if (success) return Unit.Value;
        
                        throw new Exception("Problem saving changes");
                    }
                }
            }
    }
