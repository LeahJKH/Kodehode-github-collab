# How to Collaborate on GitHub

## Index
- [Creating a Repository](#creating-a-repository)
- [Inviting Collaborators](#inviting-collaborators)
- [Setting Up the Right Folder](#setting-up-the-right-folder)
- [Cloning a Repository](#cloning-a-repository)

---

## Creating a Repository

To create a new repository:

1. Go to your GitHub profile and click on **Repositories**.  
   <img src="./images/readme/header.png" alt="GitHub Repositories">

2. Click **New** to create a new repository and give it a meaningful name.  
   <img src="./images/readme/newbtn.png" alt="New Repository Button">

---

## Inviting Collaborators

Once your repository is created, you can invite collaborators:

1. Click the **Invite Collaborators** button.  
   <img src="./images/readme/cardColl.png" alt="Invite Collaborators Button">

2. Enter your GitHub username, full name, or email of the person you want to invite.  

3. You will be prompted to enter your password. After that, press **Add People**.  
   <img src="./images/readme/collabscreen.png" alt="Collaborator Screen">

4. The invited person can join in one of three ways:
   - Accept the invitation directly from the repository.
   - Check their email for an invitation.
   - Open the GitHub inbox (note: this method may not always work).

---

## Setting Up the Right Folder

Before cloning a repository, make sure you are in the correct file path:

- Open your terminal or command line and check your current folder.  
  <img src="./images/readme/comandline.png" alt="Command Line Showing Current Path">

- If you need to navigate, use the following commands:
  - `cd ..` → move one folder up.
  - `cd [folder name]` → enter a specific folder.  
    <img src="./images/readme/cd.png" alt="Changing Directory in Terminal">

- Alternatively, you can use your file explorer to navigate to the correct folder.  
  <img src="./images/readme/file.png" height="200" alt="File Explorer">

---

## Cloning a Repository

Cloning a repository allows you to have a local copy connected to GitHub:

### New Project

If you created a new repository, copy the URL from the repository page:  
<img src="./images/readme/newprojclone.png" alt="New Project Clone URL">

### Existing Project

If your repository already contains code:

1. Open the repository page.
2. Click the green **Code** button.
3. Copy the URL.  
   <img src="./images/readme/old project.png" alt="Existing Project Clone URL">

### Clone the Repository

In your terminal:

```bash
git clone [repository URL]
```

<p>once you have gotten this you should have a new folder. check here for getting into the folder</p>

[Setting Up the Right Folder](#setting-up-the-right-folder)

## creating a branch 
<p>now you are almost there! we will look at two ways too create a new branch</p>

### terminal
<p> in the terminal too create a new branch we will have too write a few commands </p>
<img src="./images/readme/branchMake.png">
<p>this will create the branch for now its invisible. we will have too switch into it and send it up</p>
<img src="./images/readme/branchswitch.png">
<p>using this will switch your branch too the new one you made. in your left corner you can see if you have switched branch or not. it will have the name of the branch u are currently in</p>
<img src="./images/readme/currbranch.png">
<p>but for now its still not on github we will have too write more commands for that</p>

### vscode buttons
