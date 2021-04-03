package p2p

import (
	"context"
	"errors"
	"net"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/tendermint/tendermint/libs/log"
	"github.com/tendermint/tendermint/libs/sync"
)

func TestConnectionFiltering(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	logger := log.TestingLogger()

	filterByIPCount := 0
	router := &Router{
		logger:      logger,
		connTracker: newConnTracker(1, time.Second),
		options: RouterOptions{
			FilterPeerByIP: func(ctx context.Context, ip net.IP, port uint16) error {
				filterByIPCount++
				return errors.New("mock")
			},
		},
	}
	require.Equal(t, 0, filterByIPCount)
	router.openConnection(ctx, &MemoryConnection{logger: logger, closer: sync.NewCloser()})
	require.Equal(t, 1, filterByIPCount)
}
