namespace UfoFinal.Models
{
    public class Sted
    {

        public int StedID { get; set; }
        public string adress { get; set; }
        public string by { get; set; }
        public string land { get; set; }
        public DateTime dato { get; set; }

        public ICollection<Observasjon> Observasjoner {get; set;}
    }
}
