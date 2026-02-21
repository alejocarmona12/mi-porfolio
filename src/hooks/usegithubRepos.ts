import { useEffect, useState } from "react";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export function useGithubRepos(username: string) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        if (!res.ok) throw new Error();

        const data = await res.json();
        setRepos(data);
      } catch {
        setError("No se pudieron cargar los repositorios.");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}