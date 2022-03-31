interface PortConfiguration {
  port: string;
}

export const config: PortConfiguration = {
  port: process.env.PORT || "7634"
};
