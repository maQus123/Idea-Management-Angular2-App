namespace IdeaManagementSystem.Controllers {

    using Microsoft.AspNet.Mvc;
    using Models;
    using System;
    using System.Collections.Generic;

    [Route("api/[controller]")]
    public class IdeaController : Controller {

        [FromServices]
        public IIdeaRepository Ideas { get; set; }

        [HttpGet]
        public IEnumerable<Idea> GetAll() {
            return this.Ideas.GetAll();
        }

        [HttpGet("{id}", Name = "GetIdea")]
        public IActionResult GetById(string id) {
            var item = this.Ideas.Find(id);
            if (null == item) {
                return HttpNotFound();
            } else {
                return new ObjectResult(item);
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] Idea item) {
            if (null == item) {
                return HttpBadRequest();
            } else {
                this.Ideas.Add(item);
                return CreatedAtRoute("GetIdea", new { controller = "Idea", id = item.Id }, item);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] Idea item) {
            if (null == item || item.Id != id) {
                return HttpBadRequest();
            } else {
                var idea = this.Ideas.Find(id);
                if (null == idea) {
                    return HttpNotFound();
                } else {
                    this.Ideas.Update(item);
                    return new NoContentResult();
                }
            }
        }

        [HttpDelete("{id}")]
        public void Delete(string id) {
            this.Ideas.Remove(id);
            return;
        }

    }
}
