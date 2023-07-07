import React from 'react';

const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteContainerApp = React.lazy(() => import("RemoteContainer/App"));

export default function SayHelloFromA() {
  return (
    <>
      <h1>Hello from Application A!</h1>
      <React.Suspense fallback={<div>erro</div>}>
        <RemoteApp />
        <RemoteContainerApp />
      </React.Suspense></>
  );
}