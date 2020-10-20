package api

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
	githuboauth "golang.org/x/oauth2/github"
)

type data struct {
	ID   string `json:"client_id"`
	URI  string `json:"redirect_uri"`
	Code string `json:"code"`
	// Secret string `json:"client_secret"`
}

type userData struct {
	user  github.User
	token oauth2.Token
}

//Auth ... function to authnticate request
func Auth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	w.Header().Set("Content-Type", "application/json")
	var d data
	err := json.NewDecoder(r.Body).Decode(&d)
	if err != nil {
		fmt.Print(err)
	}
	log.Println("Data: ", d)
	oauthConf := &oauth2.Config{
		ClientID:     d.ID,
		ClientSecret: os.Getenv("CLIENT_SECRET"),
		Scopes:       []string{"user", "read:org"},
		Endpoint:     githuboauth.Endpoint,
	}
	token, err := oauthConf.Exchange(oauth2.NoContext, d.Code)
	if err != nil {
		fmt.Printf("oauthConf.Exchange() failed with '%s'\n", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	log.Println("token", token)
	oauthClient := oauthConf.Client(oauth2.NoContext, token)
	client := github.NewClient(oauthClient)
	user, _, err := client.Users.Get(oauth2.NoContext, "")
	if err != nil {
		fmt.Printf("client.Users.Get() faled with '%s'\n", err)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	fmt.Printf("Logged in as GitHub user: %s\n", user)
	usrData := userData{
		token: *token,
		user:  *user,
	}
	fmt.Println("userdata: ", usrData)
	json.NewEncoder(w).Encode(token)
}
