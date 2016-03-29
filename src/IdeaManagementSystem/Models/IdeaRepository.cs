namespace IdeaManagementSystem.Models {

    using System;
    using System.Collections.Concurrent;
    using System.Collections.Generic;

    public class IdeaRepository : IIdeaRepository {

        static ConcurrentDictionary<string, Idea> ideas = new ConcurrentDictionary<string, Idea>();

        public IdeaRepository() {
            this.Add(new Idea {
                Id = "1",
                Title = "Idee 1",
                Description = "Eine längere Beschreibung meiner ersten Idee.",
                Category = "Produktinnovation",
                IsSecret = false
            });
            return;
        }

        public void Add(Idea item) {
            item.Id = Guid.NewGuid().ToString();
            IdeaRepository.ideas[item.Id] = item;
            return;
        }

        public Idea Find(string id) {
            Idea idea;
            IdeaRepository.ideas.TryGetValue(id, out idea);
            return idea;
        }

        public IEnumerable<Idea> GetAll() {
            return IdeaRepository.ideas.Values;
        }

        public Idea Remove(string id) {
            Idea idea;
            IdeaRepository.ideas.TryGetValue(id, out idea);
            IdeaRepository.ideas.TryRemove(id, out idea);
            return idea;
        }

        public void Update(Idea item) {
            IdeaRepository.ideas[item.Id] = item;
            return;
        }

    }
}
