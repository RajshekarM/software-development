CC = gcc
CFLAGS = -O3 -Wall -Wextra -pthread

# List of source files
SRCS = hashgen.c blake3.c blake3_dispatch.c blake3_portable.c \
       blake3_sse2_x86-64_unix.S blake3_sse41_x86-64_unix.S \
       blake3_avx2_x86-64_unix.S blake3_avx512_x86-64_unix.S

# Output executable
TARGET = hashgen

all: $(TARGET)

$(TARGET): $(SRCS)
	$(CC) $(CFLAGS) -o $(TARGET) $(SRCS)

clean:
	rm -f $(TARGET)
