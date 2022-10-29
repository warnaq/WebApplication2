using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using UfoFinal.Models;
using RouteAttribute = Microsoft.AspNetCore.Components.RouteAttribute;

namespace UfoFinal.Controllers
{
    [Route("[controller]/[action]")]
    public class UfoController : ControllerBase
    {
        private readonly UfoContext _db;

        public UfoController (UfoContext db)
        {
            _db = db;
        }
        public bool Lagre (Person innPerson)
        {
            try
            {
                _db.Personer.Add(innPerson);
                _db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public List<Person> HentAlle()
        {
            try
            {


                List<Person> allePersonene = _db.Personer.ToList();
                return allePersonene;
            }
            catch
            {
                return null;
            }
        }
       
    }
}
