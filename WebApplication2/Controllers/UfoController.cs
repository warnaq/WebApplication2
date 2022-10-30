using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
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

        public bool Slett(int id)
        {
            try
            {
                Person enPerson = _db.Personer.Find(id);
                _db.Personer.Remove(enPerson);
                _db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public Person HentEn(int id)
        {
            try
            {
                Person enPerson = _db.Personer.Find(id);
                return enPerson;
            }
            catch
            {
                return null;
            }
        }

        public bool Endre(Person endrePerson)
        {
            try
            {
                Person enPerson = _db.Personer.Find(endrePerson.Fornavn);
                enPerson.Etternavn = endrePerson.Etternavn;
                enPerson.Email = endrePerson.Email;
                _db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
