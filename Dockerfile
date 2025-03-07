# Build stage
FROM node:23-alpine AS builder

# Build arguments for environment variables
ARG NUXT_PUBLIC_DEFAULT_CHAIN_ID
ARG NUXT_PUBLIC_CRONOS_ZKEVM_NFT_QUEST_ADDRESS

# Set build-time environment variables
ENV NUXT_PUBLIC_DEFAULT_CHAIN_ID=$NUXT_PUBLIC_DEFAULT_CHAIN_ID
ENV NUXT_PUBLIC_CRONOS_ZKEVM_NFT_QUEST_ADDRESS=$NUXT_PUBLIC_CRONOS_ZKEVM_NFT_QUEST_ADDRESS

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy source files
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the application
RUN pnpm nx run auth-server:build

# Production stage
FROM node:23-alpine

WORKDIR /app

# Install serve for static file serving
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/packages/auth-server/dist ./dist

# Expose serve port
EXPOSE 8080

# Start the server on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
