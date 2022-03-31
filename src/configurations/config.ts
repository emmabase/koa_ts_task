interface portConfiguration {
  port: string;
}

export const config: portConfiguration = {
  port: process.env.PORT || "7634"
};
