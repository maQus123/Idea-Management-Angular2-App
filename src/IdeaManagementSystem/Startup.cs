namespace IdeaManagementSystem {

    using Microsoft.AspNet.Builder;
    using Microsoft.AspNet.Hosting;
    using Microsoft.Extensions.DependencyInjection;
    using Models;
    using Newtonsoft.Json.Serialization;

    public class Startup {

        public void ConfigureServices(IServiceCollection services) {
            services.AddMvc()
                  .AddJsonOptions(options => {
                      options.SerializerSettings.ContractResolver =
                          new CamelCasePropertyNamesContractResolver();
                  });
            services.AddSingleton<IIdeaRepository, IdeaRepository>();
            return;
        }

        public void Configure(IApplicationBuilder app) {
            app.UseIISPlatformHandler();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
            return;
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);

    }

}
