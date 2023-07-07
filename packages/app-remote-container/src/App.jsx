import React from "react";

const RemoteNestedApp = React.lazy(() => import("RemoteNested/App"));

export default function SayHelloFromRemoteContainer() {
  return (
    <>
      <h1>Hello from Remote Container!</h1>
      <RemoteNestedApp />
    </>
  );
}
