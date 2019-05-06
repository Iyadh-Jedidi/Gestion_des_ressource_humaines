package iyadh.pfa.model;

import java.util.HashSet;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Formation {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String duree;


//    @OneToMany
//    private Set<Compte> demande;
    
    
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            })
    @JoinTable(name = "DemandesFormation",
            joinColumns = { @JoinColumn(name = "id") },
            inverseJoinColumns = { @JoinColumn(name = "id") })
    private Set<Compte> comptes = new HashSet<>();
    
    
//    public Formation(){}
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDuree() {
        return duree;
    }

    public void setDurée(String duree) {
        this.duree = duree;
    }

    /**
     * @return the comptes
     */
    public Set<Compte> getComptes() {
        return comptes;
    }

    /**
     * @param comptes the comptes to set
     */
    public void setComptes(Set<Compte> comptes) {
        this.comptes = comptes;
    }
     

    public Formation(Long id, String name, String description, String duree) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duree = duree;
    }

   
}
