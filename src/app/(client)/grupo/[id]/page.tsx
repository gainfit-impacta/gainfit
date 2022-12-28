"use client";

import "./styles.css";

import type { Party } from "@/interfaces/party";
import type { User } from "@/interfaces/user";
import type { RefObject } from "react";

import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

import { env } from "@/lib/env";
import { getParty } from "@/lib/party";

function PartyPage({ params }: { params: Record<string, unknown> }) {
  const [party, setParty] = useState<Party>();
  const [users, setUsers] = useState<User[]>();
  const [countdownEnded, setCountdownEnded] = useState(false);
  const countdownRef = useRef() as RefObject<Countdown>;

  useEffect(() => {
    async function getPartyClient() {
      const party = await getParty(params.id as string);
      setParty(party);
      setUsers(party.expand!["users"] as unknown as Array<User>);

      if (new Date(party?.expired as string) <= new Date()) setCountdownEnded(true);
    }

    if (!party) getPartyClient();
  }, []);

  useEffect(() => {
    if (countdownEnded) {
      countdownRef?.current?.api?.stop();
    }
  }, [countdownEnded]);

  return (
    <div className="container">
      <h1>{party?.name}</h1>
      {env.isBrowser && users && (
        <div className="countdown">
          {!countdownEnded && <span>Tempo restante: </span>}

          <Countdown
            ref={countdownRef}
            date={new Date(party?.expired as string)}
            onStop={() => setCountdownEnded(true)}
          >
            <span>Finalizado! O vencedor foi {users[0]?.name}</span>
          </Countdown>
        </div>
      )}
      <table>
        <tr>
          <th>Posição</th>
          <th>Nome</th>
        </tr>
        {party?.expand?.users?.map((user: User, index: number) => {
          console.log(user);
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default PartyPage;
