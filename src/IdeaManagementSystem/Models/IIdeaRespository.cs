using System.Collections.Generic;

namespace IdeaManagementSystem.Models {
    public interface IIdeaRepository {

        void Add(Idea item);
        IEnumerable<Idea> GetAll();
        Idea Find(string id);
        Idea Remove(string id);
        void Update(Idea item);

    }
}
