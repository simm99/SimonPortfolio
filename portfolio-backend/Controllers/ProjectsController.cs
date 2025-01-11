using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace MyPortfolioApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public ProjectsController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        // GET: api/projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            // GitHub API URL for fetching public repositories
            var url = "https://api.github.com/users/simm99/repos";

            // Set the User-Agent header (required by GitHub API)
            _httpClient.DefaultRequestHeaders.Add("User-Agent", "request");

            // Send the GET request to GitHub API
            var response = await _httpClient.GetStringAsync(url);

            // Deserialize the JSON response into a list of projects
            var projects = JsonConvert.DeserializeObject<List<Project>>(response);

            return Ok(projects); // Return the project data
        }
    }

    // Model for Project
    public class Project
    {
        public string Name { get; set; }      // Name of the project
        public string Description { get; set; } // Short description of the project
        public string HtmlUrl { get; set; }  // URL to the project on GitHub
        public string AvatarUrl { get; set; } // Avatar or image URL from GitHub
    }
}
