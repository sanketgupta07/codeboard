import React, { useEffect, useState } from "react";
import { CardColumns } from "react-bootstrap";
import Repostory from "./repository";

export default function TopRepo(params) {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(params.url);
      const respData = await result.json();
      setData(respData);
    };
    fetchData();
  }, [params.url]);

  return (
    <CardColumns>
      {data.items.map((node) => (
        <Repostory key={node.id} name={node.name} login={node.owner.login} />
      ))}
    </CardColumns>
  );
}
