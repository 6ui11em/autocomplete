const completionSpec: Fig.Spec = {
  name: "pass",
  description: "Bassic passwordstore.org autocomplete",
  subcommands: [
    {
      name: "insert",
      description: "Insert new password or overwrite existing one",
      args: {
        name: "path",
        description: "Path of new or existing password",
        isOptional: false,
      },
    },
    {
      name: "ls",
      description: "List passwords",
      args: {
        name: "subfolder",
        description: "Path of folder to list",
        isOptional: true,
      },
    },
    {
      name: "find",
      description: "List passwords that match pass-names",
      args: {
        name: "pass-names",
        description: "Pass-names to find",
        isOptional: true,
      },
    },
    {
      name: "show",
      description:
        "Show existing password and optionally put it on the clipboard.  If put on the clipboard, it will be cleared in 45 seconds",
      options: [
        {
          name: ["--clip", "-c"],
          description: "Copy generated password to the clipboard",
        },
      ],
      args: {
        name: "pass-names",
        description: "Pass-names to find",
        isOptional: true,
      },
    },
    {
      name: "generate",
      description: "Generate new password",
      options: [
        {
          name: ["--no-symbols", "-n"],
          description: "Generate password without symbols",
        },
        {
          name: ["--clip", "-c"],
          description: "Copy generated password to the clipboard",
        },
      ],
      args: {
        name: "path",
        description: "Path of new or existing password",
        isOptional: false,
      },
    },
    {
      name: "rm",
      description:
        "Remove existing password or directory, optionally forcefully",
      options: [
        {
          name: ["--recursive", "-r"],
          description: "Remove existing password recursive",
        },
        {
          name: ["--force", "-f"],
          description: "Force remove existing password without promp",
        },
      ],
      args: {
        name: "path",
        description: "Path of new or existing password",
        isOptional: false,
      },
    },
    {
      name: "mv",
      description:
        "Renames or moves old-path to new-path, optionally forcefully, selectively reencrypting",
      options: [
        {
          name: ["--force", "-f"],
          description: "Force move existing password without promp",
        },
      ],
      args: [
        {
          name: "old-path",
          description: "Old Path of existing password",
          isOptional: false,
        },
        {
          name: "new-path",
          description: "New Path of the password",
          isOptional: false,
        },
      ],
    },
    {
      name: "cp",
      description:
        "Copies old-path to new-path, optionally forcefully, selectively reencrypting",
      options: [
        {
          name: ["--force", "-f"],
          description: "Force copy existing password without promp",
        },
      ],
      args: [
        {
          name: "old-path",
          description: "Old Path of existing password",
          isOptional: false,
        },
        {
          name: "new-path",
          description: "New Path of the password",
          isOptional: false,
        },
      ],
    },
    {
      name: "git",
      description:
        "If the password store is a git repository, execute a git command specified by git-command-args",
      options: [
        {
          name: "pull",
          description: "Pull passwords from git repository",
        },
        {
          name: "push",
          description: "Push password to git repository",
        },
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help for pass",
    },
    {
      name: "-c",
      description: "Copy existing password",
    },
  ],
  args: {
    name: "path-names",
    description: "The path of the desired password",
    isOptional: true,
  },
};
export default completionSpec;
