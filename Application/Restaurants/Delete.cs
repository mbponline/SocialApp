using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Restaurants
{
    public class Delete
    {
        public class Command : IRequest
                {
                    public Guid Id { get; set; }
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

                        _context.Remove(restaurant);

                        var success = await _context.SaveChangesAsync() > 0;
        
                        if (success) return Unit.Value;
        
                        throw new Exception("Problem saving changes");
                    }
                }
            }
    }
