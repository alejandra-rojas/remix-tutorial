// Remix only looks for links in route pages not in components, but we can import the link from components

import NewNote, { links as newNoteLinks } from "~/components/NewNote";
//surfacing links pattern

function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export default NotesPage;

//surfacing links pattern
export function links() {
  return [...newNoteLinks()];
}
