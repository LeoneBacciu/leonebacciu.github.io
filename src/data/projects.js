import MyRomaPreview from "./projects/images/myroma.png"

const flags = {
  dart_flutter: "Dart & Flutter",
  django: "Django",
  sqlite: "SQLite",
  rest: "REST API",
}

const projectsData = {
  projects: [
    {
      title: "MyRoma",
      description:
        "A really complete and easy to use guide to Rome. With this app you can find all the most interesting attractions of the city, which you can visit in complete freedom thanks to the audio and images.",
      flags: [flags.dart_flutter, flags.django, flags.sqlite, flags.rest],
      preview: MyRomaPreview,
      url: "https://www.myroma-app.com/",
    },
  ],
}

export default projectsData
