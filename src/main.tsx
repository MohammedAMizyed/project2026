import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import "@mantine/core/styles.css"
import { Button, createTheme, MantineProvider } from "@mantine/core"
import "./i18n"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
// export const theme = createTheme({
//   components: {
//     TextInput: TextInput.extend({
//       defaultProps: {
//         variant: "default",
//       },

//       styles: {
//         label: {
//           marginBottom: "8px",
//           display: "block",
//           color: "white",
//         },

//         input: {
//           width: "100%",
//           backgroundColor: "#58449375",
//           borderRadius: "12px",
//           border: "none",
//           padding: "8px 12px",
//           margin: "8px 0",
//           color: "white",
//         },
//       },
//     }),
//   },
// })

const theme = createTheme({
  components: {
    Button: Button.extend({
      styles: (theme, props) => {
        if (props.variant === "primary") {
          return {
            root: {
              backgroundColor: "#230871",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: "12px",

              "&:hover": {
                backgroundColor: "#1a065a",
              },
            },
          }
        }

        return {}
      },
    }),
  },
})
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
