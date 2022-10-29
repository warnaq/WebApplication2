namespace UfoFinal.Models
{
    public class Person

    {
        public int PersonID { get; set; }
        public string Fornavn { get; set; }
        public string Etternavn { get; set; }
        public string Email { get; set; }

        public ICollection<Observasjon> Observasjoner { get; set; }

    }
}
