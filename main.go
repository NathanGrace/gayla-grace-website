package main

import (
	"encoding/json"
	"net/http"
	"net/mail"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/mailer"
)

func main() {
	app := pocketbase.New()

	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		se.Router.POST("/api/send-email", func(e *core.RequestEvent) error {
			data := struct {
				To      string `json:"to"`
				Subject string `json:"subject"`
				Body    string `json:"body"`
			}{}

			if err := json.NewDecoder(e.Request.Body).Decode(&data); err != nil {
				return apis.NewBadRequestError("Invalid data", err)
			}

			message := &mailer.Message{
				From:    mail.Address{Address: app.Settings().Meta.SenderAddress},
				To:      []mail.Address{{Address: data.To}},
				Subject: data.Subject,
				HTML:    data.Body,
			}

			if err := app.NewMailClient().Send(message); err != nil {
				return apis.NewApiError(500, "Send failed", err)
			}

			return e.JSON(http.StatusOK, map[string]string{"status": "sent"})
		})

		return se.Next()
	})

	if err := app.Start(); err != nil {
		panic(err)
	}
}
