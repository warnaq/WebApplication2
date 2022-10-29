public class Personer {
    private String Fornavn;
    private String Etternavn;
    private String Email;


    public Personer(String Fornavn, String Etternavn, String Email) {
        this.Fornavn = Fornavn;
        this.Etternavn = Etternavn;
        this.Email = Email;
        
    }

    public Personer() {
    }

    public String getFornavn() {
        return Fornavn;
    }

    public void setFornavn(String Fornavn) {
        this.Fornavn = Fornavn;
    }

    public String geEtternavn() {
        return Etternavn
    }

    public void setEtternavn(String Etternavn) {
        this.Etternavn = Etternavn;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }
}