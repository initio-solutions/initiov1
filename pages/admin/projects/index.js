import Nav from "../nav";
import Link from "next/link";
import Head from "next/head";
function Projects() {
  return (
    <div className="flex">
      <Head>
        <title>Projects</title>
      </Head>
      <Nav variable="projects" />
      <div className="ml-4">
        <h1>Projects</h1>
        <h2>
          <Link href="/admin/projects/add">Add Project</Link>
        </h2>
      </div>
    </div>
  );
}

export default Projects;
