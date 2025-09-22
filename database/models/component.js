To create visual representations of the new schema for notes and users, I'll describe a simple database schema and create ER diagrams for both the users and the notes.

**Database Schema Description:**

For this example, let's say we're creating a simple note-taking application where users can create, read, update, and delete (CRUD) notes. We'll have two main entities: users and notes.

**Users Entity:**

- **ID (Primary Key):** Unique identifier for the user.
- **Username:** The username chosen by the user.
- **Password:** The password for the user's account (hashed for security).
- **Email:** The email address of the user.
- **Creation Date:** The date the user account was created.

**Notes Entity:**

- **ID (Primary Key):** Unique identifier for the note.
- **Title:** The title of the note.
- **Content:** The content of the note.
- **User ID (Foreign Key):** The ID of the user who created the note.
- **Creation Date:** The date the note was created.

**ER Diagram for Users:**

Here's a simple ER diagram for the users entity:

```markdown
+---------------+
|       User    |
+---------------+
|  ID (PK)     |
|  Username    |
|  Password    |
|  Email       |
|  Creation Date|
+---------------+
```

**ER Diagram for Notes:**

And here's a simple ER diagram for the notes entity:

```markdown
+---------------+
|       Note    |
+---------------+
|  ID (PK)     |
|  Title       |
|  Content     |
|  User ID (FK)|
|  Creation Date|
+---------------+
```

Here's a more visual representation of both ER diagrams:

**Users ER Diagram:**
```
+---------------+
|       User    |
+---------------+
|  ID (PK)     |---------------->|
|  Username    |                   |
|  Password    |                   |
|  Email       |                   |
|  Creation Date|                   |
+---------------+
```

**Notes ER Diagram:**
```
+---------------+
|       Note    |
+---------------+
|  ID (PK)     |---------------->|
|  Title       |                   |
|  Content     |                   |
|  User ID (FK) |---------------->|
|  Creation Date|                   |
+---------------+
```

To create these diagrams, you can use a tool like MySQL Workbench, Lucidchart, or draw.io.

Let me know if you have any further questions or if there's anything else I can help you with!