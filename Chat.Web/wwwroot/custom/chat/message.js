"use strict";

var connection = new signalR.HubConnectionBuilder()
                        .withUrl("/chat", {
                            accessTokenFactory: () => "testing"
                        })
                        .withAutomaticReconnect()
                        .build();
