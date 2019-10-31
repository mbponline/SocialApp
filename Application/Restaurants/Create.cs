using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Restaurants
{
    public class Create
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
                var restaurant = new Restaurant{
                    Id = request.Id,
                    Name = request.Name,
                    Phone = request.Phone,
                    Url = request.Url,
                    Address = request.Address,
                    UbahnStation = request.UbahnStation,
                    Description = request.Description
                };

                _context.Restaurants.Add(restaurant);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}