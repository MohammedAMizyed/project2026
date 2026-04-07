import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import "@mantine/core/styles.css"
import { MantineProvider, TextInput, createTheme } from "@mantine/core"
import "./i18n"
import { BrowserRouter } from "react-router-dom"
export const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        variant: "default",
      },

      styles: {
        label: {
          marginBottom: "8px",
          display: "block",
          color: "white",
        },

        input: {
          width: "100%",
          backgroundColor: "#58449375",
          borderRadius: "12px",
          border: "none",
          padding: "8px 12px",
          margin: "8px 0",
          color: "white",
        },
      },
    }),
  },
})
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
