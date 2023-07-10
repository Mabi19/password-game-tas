// Taken straight from the game code.
const table = [
    {
        sol: 'Nf6+',
        black: !1,
        fen: 'r2qkb1r/pp2nppp/3p4/2pNN1B1/2BnP3/3P4/PPP2PPP/R2bK2R w KQkq - 1 0'
    },
    {
        sol: 'Qd5+',
        black: !1,
        fen: '1rb4r/pkPp3p/1b1P3n/1Q6/N3Pp2/8/P1P3PP/7K w - - 1 0'
    },
    {
        sol: 'Qb8+',
        black: !1,
        fen: '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 1 0'
    },
    {
        sol: 'Qd8+',
        black: !1,
        fen: 'r1b2k1r/ppp1bppp/8/1B1Q4/5q2/2P5/PPP2PPP/R3R1K1 w - - 1 0'
    },
    {
        sol: 'Qxg6+',
        black: !1,
        fen: '5rkr/pp2Rp2/1b1p1Pb1/3P2Q1/2n3P1/2p5/P4P2/4R1K1 w - - 1 0'
    },
    {
        sol: 'Qxd7+',
        black: !1,
        fen: '1r1kr3/Nbppn1pp/1b6/8/6Q1/3B1P2/Pq3P1P/3RR1K1 w - - 1 0'
    },
    {
        sol: 'Qxf8+',
        black: !1,
        fen: '5rk1/1p1q2bp/p2pN1p1/2pP2Bn/2P3P1/1P6/P4QKP/5R2 w - - 1 0'
    },
    {
        sol: 'Qd7+',
        black: !1,
        fen: 'r1nk3r/2b2ppp/p3b3/3NN3/Q2P3q/B2B4/P4PPP/4R1K1 w - - 1 0'
    },
    {
        sol: 'Qg6+',
        black: !1,
        fen: 'r4br1/3b1kpp/1q1P4/1pp1RP1N/p7/6Q1/PPB3PP/2KR4 w - - 1 0'
    },
    {
        sol: 'Qxh6+',
        black: !1,
        fen: 'r1b2k1r/ppppq3/5N1p/4P2Q/4PP2/1B6/PP5P/n2K2R1 w - - 1 0'
    },
    {
        sol: 'Qg4+',
        black: !1,
        fen: 'r2q1b1r/1pN1n1pp/p1n3k1/4Pb2/2BP4/8/PPP3PP/R1BQ1RK1 w - - 1 0'
    },
    {
        sol: 'Qxh6+',
        black: !1,
        fen: '3q2r1/4n2k/p1p1rBpp/PpPpPp2/1P3P1Q/2P3R1/7P/1R5K w - - 1 0'
    },
    {
        sol: 'Qg6+',
        black: !1,
        fen: 'r2qk2r/pb4pp/1n2Pb2/2B2Q2/p1p5/2P5/2B2PPP/RN2R1K1 w - - 1 0'
    },
    {
        sol: 'Rg1+',
        black: !0,
        fen: '6k1/pp4p1/2p5/2bp4/8/P5Pb/1P3rrP/2BRRN1K b - - 0 1'
    },
    {
        sol: 'Qxh5+',
        black: !1,
        fen: 'rnbqkbn1/ppppp3/7r/6pp/3P1p2/3BP1B1/PPP2PPP/RN1QK1NR w - - 1 0'
    },
    {
        sol: 'Ne7',
        black: !1,
        fen: 'r2qrb2/p1pn1Qp1/1p4Nk/4PR2/3n4/7N/P5PP/R6K w - - 1 0'
    },
    {
        sol: 'Qc3+',
        black: !0,
        fen: '8/2r5/1k5p/1pp4P/8/K2P4/PR2QB2/2q5 b - - 0 1'
    },
    {
        sol: 'Qf5+',
        black: !1,
        fen: 'r1b3nr/ppqk1Bbp/2pp4/4P1B1/3n4/3P4/PPP2QPP/R4RK1 w - - 1 0'
    },
    {
        sol: 'Bf6+',
        black: !1,
        fen: '3k1r1r/pb3p2/1p4p1/1B2B3/3qn3/6QP/P4RP1/2R3K1 w - - 1 0'
    },
    {
        sol: 'Qc8+',
        black: !1,
        fen: 'rn2kb1r/1pQbpppp/1p6/qp1N4/6n1/8/PPP3PP/2KR2NR w - - 1 0'
    },
    {
        sol: 'Re8+',
        black: !1,
        fen: 'r2k2nr/pp1b1Q1p/2n4b/3N4/3q4/3P4/PPP3PP/4RR1K w - - 1 0'
    },
    {
        sol: 'Rc1+',
        black: !0,
        fen: '7k/1p4p1/p4b1p/3N3P/2p5/2rb4/PP2r3/K2R2R1 b - - 0 1'
    },
    {
        sol: 'Bf4+',
        black: !1,
        fen: 'r2q2nr/5p1p/p1Bp3b/1p1NkP2/3pP1p1/2PP2P1/PP5P/R1Bb1RK1 w - - 1 0'
    },
    {
        sol: 'Ne6+',
        black: !1,
        fen: 'r2q1k1r/ppp1bB1p/2np4/6N1/3PP1bP/8/PPP5/RNB2RK1 w - - 1 0'
    },
    {
        sol: 'Qf8+',
        black: !1,
        fen: '6k1/1p1r1pp1/p1r3b1/3pPqB1/2pP4/Q1P4R/P3P2K/6R1 w - - 1 0'
    },
    {
        sol: 'Bf5+',
        black: !0,
        fen: 'r1b3k1/ppp3pp/8/3pB3/1P1P4/3K1P2/PP1n1q1P/R2Q3R b - - 0 1'
    },
    {
        sol: 'Qxc6+',
        black: !1,
        fen: '2kr1b1r/pp3ppp/2p1b2q/4B3/4Q3/2PB2R1/PPP2PPP/3R2K1 w - - 1 0'
    },
    {
        sol: 'Qxb8+',
        black: !1,
        fen: 'rn2kb1r/pp3ppp/4p1qn/1p4B1/2B5/3P2QP/PPP2PP1/R3K2R w - - 1 0'
    },
    {
        sol: 'Qxd6+',
        black: !1,
        fen: 'rnb2b1r/p3kBp1/3pNn1p/2pQN3/1p2PP2/4B3/Pq5P/4K3 w - - 1 0'
    },
    {
        sol: 'Rd8+',
        black: !1,
        fen: 'r1b1k2r/ppQ1q2n/2p2p2/P3p2p/N3P1pP/1B4P1/1PP2P2/3R1NK1 w - - 1 0'
    },
    {
        sol: 'Nd3+',
        black: !0,
        fen: 'r6k/pp4pp/1b1P4/8/1n4Q1/2N1RP2/PPq3p1/1RB1K3 b - - 0 1'
    },
    {
        sol: 'Rxb6+',
        black: !1,
        fen: '8/1r5p/kpQ3p1/p3rp2/P6P/8/4bPPK/1R6 w - - 1 0'
    },
    {
        sol: 'Qxf7+',
        black: !1,
        fen: 'r1b2rk1/2p2ppp/p7/1p6/3P3q/1BP3bP/PP3QP1/RNB1R1K1 w - - 1 0'
    },
    {
        sol: 'Nf6+',
        black: !1,
        fen: 'r2qkb1r/2p1nppp/p2p4/np1NN3/4P3/1BP5/PP1P1PPP/R1B1K2R w - - 1 0'
    },
    {
        sol: 'Qe7+',
        black: !1,
        fen: 'rnbkn2r/pppp1Qpp/5b2/3NN3/3Pp3/8/PPP1KP1P/R1B4q w - - 1 0'
    },
    {
        sol: 'Rg8+',
        black: !1,
        fen: '4rk2/2pQn2p/p4p2/1p2pN1P/4q3/2P3R1/5PPK/8 w - - 1 0'
    },
    {
        sol: 'Qxf7+',
        black: !1,
        fen: 'r1b2rk1/pp3ppp/3p4/3Q1nq1/2B1R3/8/PP3PPP/R5K1 w - - 1 0'
    },
    {
        sol: 'Be3+',
        black: !0,
        fen: '7r/p3ppk1/3p4/2p1P1Kp/2Pb4/3P1QPq/PP5P/R6R b - - 0 1'
    },
    {
        sol: 'Nh4+',
        black: !0,
        fen: 'rn2kb1r/ppp1pppp/8/8/4q3/3P1N1b/PPP1BPnP/RNBQ1K1R b kq - 0 1'
    },
    {
        sol: 'Qxe6+',
        black: !1,
        fen: 'r1b1kb1r/pp1n1pp1/1qp1p2p/6B1/2PPQ3/3B1N2/P4PPP/R4RK1 w - - 1 0'
    },
    {
        sol: 'Qf8+',
        black: !1,
        fen: '6k1/5p2/1p5p/p4Np1/5q2/Q6P/PPr5/3R3K w - - 1 0'
    },
    {
        sol: 'Qf6+',
        black: !1,
        fen: 'r3q3/ppp3k1/3p3R/5b2/2PR3Q/2P1PrP1/P7/4K3 w - - 1 0'
    },
    {
        sol: 'Nb5+',
        black: !0,
        fen: 'r3k2r/1Bp2ppp/8/4q1b1/pP1n4/P1KP3P/1BP5/R2Q3R b - - 0 1'
    },
    {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r1bq2rk/pp3pbp/2p1p1pQ/7P/3P4/2PB1N2/PP3PPR/2KR4 w - - 1 0'
    },
    {
        sol: 'Qxb7+',
        black: !1,
        fen: 'k1n3rr/Pp3p2/3q4/3N4/3Pp2p/1Q2P1p1/3B1PP1/R4RK1 w - - 1 0'
    },
    {
        sol: 'Qg1+',
        black: !0,
        fen: '8/1p3k2/4p1rp/p3Pp1Q/3qnP2/1P6/P6P/2R2R1K b - - 0 1'
    },
    {
        sol: 'Bh6+',
        black: !1,
        fen: 'r1bq3r/ppp1b1kp/2n3p1/3B3Q/3p4/8/PPP2PPP/RNB2RK1 w - - 1 0'
    },
    {
        sol: 'Rxf6+',
        black: !1,
        fen: '4r3/pbpn2n1/1p1prp1k/8/2PP2PB/P5N1/2B2R1P/R5K1 w - - 1 0'
    },
    {
        sol: 'Qxh6+',
        black: !1,
        fen: '1q5r/1b1r1p1k/2p1pPpb/p1Pp4/3B1P1Q/1P4P1/P4KB1/2RR4 w - - 1 0'
    },
    {
        sol: 'h5+',
        black: !1,
        fen: 'r4R2/1b2n1pp/p2Np1k1/1pn5/4pP1P/8/PPP1B1P1/2K4R w - - 1 0'
    },
    {
        sol: 'Nxd7+',
        black: !1,
        fen: 'r1bqk2r/bppp1ppp/8/PB2N3/3n4/B7/2PPQnPP/RN2K2R w KQkq - 1 0'
    },
    {
        sol: 'Rxh2+',
        black: !0,
        fen: '1r4k1/3b2pp/1b1pP2r/pp1P4/4q3/8/PP4RP/2Q2R1K b - - 0 1'
    },
    {
        sol: 'Bb5+',
        black: !0,
        fen: '8/2k2p2/2b3p1/P1p1Np2/1p3b2/1P1K4/5r2/R3R3 b - - 0 1'
    },
    {
        sol: 'Rg8+',
        black: !1,
        fen: 'r4r1k/2qb3p/p2p1p2/1pnPN3/2p1Pn2/2P1N3/PPB1QPR1/6RK w - - 1 0'
    },
    {
        sol: 'Qh8+',
        black: !1,
        fen: '1r2q3/1R6/3p1kp1/1ppBp1b1/p3Pp2/2PP4/PP3P2/5K1Q w - - 1 0'
    },
    {
        sol: 'Bh5+',
        black: !1,
        fen: 'r3kb1r/pb6/2p2p1p/1p2pq2/2pQ3p/2N2B2/PP3PPP/3RR1K1 w - - 1 0'
    },
    {
        sol: 'Qh7+',
        black: !1,
        fen: '4r3/2q1rpk1/p3bN1p/2p3p1/4QP2/2N4P/PP4P1/5RK1 w - - 1 0'
    },
    {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r5rk/pp1np1bn/2pp2q1/3P1bN1/2P1N2Q/1P6/PB2PPBP/3R1RK1 w - - 1 0'
    },
    {
        sol: 'Ne5+',
        black: !1,
        fen: 'rn1qkb1r/4p2p/2p2nN1/p4p1Q/PpBP4/8/1P3PPP/R1B1K2R w - - 1 0'
    },
    {
        sol: 'Qxg7+',
        black: !1,
        fen: 'r1b2rk1/ppppbpp1/7p/4R3/6Qq/2BB4/PPP2PPP/R5K1 w - - 1 0'
    },
    {
        sol: 'Rh8+',
        black: !1,
        fen: '1r3k2/2n1p1b1/3p2QR/p1pq1pN1/bp6/7P/2P2PP1/4RBK1 w - - 1 0'
    },
    {
        sol: 'Rxh6+',
        black: !1,
        fen: '5b2/1p3rpk/p1b3Rp/4B1RQ/3P1p1P/7q/5P2/6K1 w - - 1 0'
    },
    {
        sol: 'Qxe8+',
        black: !1,
        fen: 'r2Rnk1r/1p2q1b1/7p/6pQ/4Ppb1/1BP5/PP3BPP/2K4R w - - 1 0'
    },
    {
        sol: 'Rxe8+',
        black: !1,
        fen: 'r2qr2k/pp1b3p/2nQ4/2pB1p1P/3n1PpR/2NP2P1/PPP5/2K1R1N1 w - - 1 0'
    },
    {
        sol: 'Qxh6+',
        black: !1,
        fen: '4r3/p2r1p1k/3q1Bpp/4P3/1PppR3/P5P1/5P1P/2Q3K1 w - - 1 0'
    },
    {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r3n1rk/q3NQ1p/p2pbP2/1p4p1/1P1pP1P1/3R4/P1P4P/3B2K1 w - - 1 0'
    },
    {
        sol: 'Kh6',
        black: !0,
        fen: '8/2r2pk1/3p2p1/3Pb3/2P1P2K/6r1/1R2B3/1R6 b - - 0 1'
    },
    {
        sol: 'Be1+',
        black: !1,
        fen: '8/8/p3p3/3b1pR1/1B3P1k/8/4r1PK/8 w - - 1 0'
    },
    {
        sol: 'Rxg7+',
        black: !1,
        fen: 'Q7/2r2rpk/2p4p/7N/3PpN2/1p2P3/1K4R1/5q2 w - - 1 0'
    },
    {
        sol: 'Qxg7+',
        black: !1,
        fen: 'r3rknQ/1p1R1pb1/p3pqBB/2p5/8/6P1/PPP2P1P/4R1K1 w - - 1 0'
    },
    {
        sol: 'Rg7',
        black: !1,
        fen: '4rr2/1p5R/3p1p2/p2Bp3/P2bPkP1/1P5R/1P2K3/8 w - - 1 0'
    },
    {
        sol: 'Bd6+',
        black: !1,
        fen: 'r4kr1/pbNn1q1p/1p6/2p2BPQ/5B2/8/P6P/b4RK1 w - - 1 0'
    },
    {
        sol: 'Ng6+',
        black: !1,
        fen: '6rk/6pp/5p2/p7/P2Q1N2/4P1P1/2r2n1P/6K1 w - - 1 0'
    },
    {
        sol: 'Qh3+',
        black: !1,
        fen: '1n6/p3q2p/2pNk3/1pP1p3/1P2P2Q/2P3P1/6K1/8 w - - 1 0'
    },
    {
        sol: 'Rg1+',
        black: !0,
        fen: '6rk/p3p2p/1p2Pp2/2p2P2/2P1nBr1/1P6/P6P/3R1R1K b - - 0 1'
    },
    {
        sol: 'Qg1+',
        black: !0,
        fen: '3rk3/1p3p2/2p5/7P/1P1qpp1R/P5P1/2Q5/3BK3 b - - 0 1'
    },
    {
        sol: 'Rh8+',
        black: !1,
        fen: '2QR4/6b1/1p4pk/7p/5n1P/4rq2/5P2/5BK1 w - - 1 0'
    },
    {
        sol: 'Rf6',
        black: !1,
        fen: 'r3q1k1/5p2/3P2pQ/Ppp5/1pnbN2R/8/1P4PP/5R1K w - - 1 0'
    },
    {
        sol: 'Re7+',
        black: !1,
        fen: '5b2/R4p1p/1r2kp2/1p2pN2/2r1P3/P1P3P1/1PK4P/3R4 w - - 1 0'
    },
    {
        sol: 'Qh6+',
        black: !1,
        fen: 'r3q1r1/1p2bNkp/p3n3/2PN1B1Q/PP1P1p2/7P/5PP1/6K1 w - - 1 0'
    },
    {
        sol: 'Qxh7+',
        black: !1,
        fen: '1r2q2k/4N2p/3p1Pp1/2p1n1P1/2P5/p2P2KQ/P3R3/8 w - - 1 0'
    },
    {
        sol: 'Rf6+',
        black: !1,
        fen: '5R2/4r1r1/1p4k1/p1pB2Bp/P1P4K/2P1p3/1P6/8 w - - 1 0'
    },
    {
        sol: 'Qf7+',
        black: !1,
        fen: '2bq1rk1/r1p1b1pn/p2pP1Np/1p1B1Q2/4P3/2P4P/PP3PP1/R1B1R1K1 w - - 1 0'
    },
    {
        sol: 'Bb6+',
        black: !1,
        fen: '1nbk1b1r/1r6/p2P2pp/1B2PpN1/2p2P2/2P1B3/7P/R3K2R w - - 1 0'
    },
    {
        sol: 'Rxg6+',
        black: !1,
        fen: '3r2k1/p1p2p2/bp2p1nQ/4PB1P/2pr3q/6R1/PP3PP1/3R2K1 w - - 1 0'
    },
    {
        sol: 'Qh8+',
        black: !1,
        fen: '6k1/3r3p/p1q3pP/1p1p4/3Q4/4R1P1/P4PK1/8 w - - 1 0'
    },
    {
        sol: 'Rxh3+',
        black: !0,
        fen: '2k4r/ppp5/4bqp1/3p2Q1/6n1/2NB3P/PPP2bP1/R1B2R1K b - - 0 1'
    },
    {
        sol: 'Rxh7+',
        black: !1,
        fen: 'r2r3k/b1qn2pp/1p2Bp2/2p2P2/PP1pQ3/7R/1B3PPP/5RK1 w - - 1 0'
    },
    {
        sol: 'Nf5+',
        black: !1,
        fen: '8/1p3Qb1/p5pk/P1p1p1p1/1P2P1P1/2P1N2n/5P1P/4qB1K w - - 1 0'
    },
    {
        sol: 'Rxf7+',
        black: !1,
        fen: '3rrk2/2p2pR1/p4n2/1p1PpP2/2p2q1P/3P1BQ1/PPP5/6RK w - - 1 0'
    },
    {
        sol: 'Rf7+',
        black: !1,
        fen: 'r4kr1/1b2R1n1/pq4p1/4Q3/1p4P1/5P2/PPP4P/1K2R3 w - - 1 0'
    },
    {
        sol: 'f5+',
        black: !1,
        fen: '3n4/1R6/p5k1/2B5/1P3PK1/r7/8/8 w - - 1 0'
    },
    {
        sol: 'Rh8+',
        black: !1,
        fen: '1r3rk1/1pnnq1bR/p1pp2B1/P2P1p2/1PP1pP2/2B3P1/5PK1/2Q4R w - - 1 0'
    },
    {
        sol: 'Qxf2+',
        black: !0,
        fen: 'b3r1k1/5ppp/p2p4/p4qN1/Q2b4/6R1/5PPP/5RK1 b - - 0 1'
    },
    {
        sol: 'Qxf8+',
        black: !1,
        fen: '5r1k/pp1n1p1p/5n1Q/3p1pN1/3P4/1P4RP/P1r1qPP1/R5K1 w - - 1 0'
    },
    {
        sol: 'Re8+',
        black: !1,
        fen: '5k2/p3Rr2/1p4pp/q4p2/1nbQ1P2/6P1/5N1P/3R2K1 w - - 1 0'
    },
    {
        sol: 'Rxf6+',
        black: !1,
        fen: '4rk2/pp2N1bQ/5p2/8/2q5/P7/3r2PP/4RR1K w - - 1 0'
    },
    {
        sol: 'Qh3+',
        black: !0,
        fen: 'r4rk1/4bp2/1Bppq1p1/4p1n1/2P1Pn2/3P2N1/P2Q1PBK/1R5R b - - 0 1'
    },
    {
        sol: 'Nf3',
        black: !1,
        fen: '2q1r3/4pR2/3rQ1pk/p1pnN2p/Pn5B/8/1P4PP/3R3K w - - 1 0'
    },
    {
        sol: 'Qxe6+',
        black: !1,
        fen: 'q2br1k1/1b4pp/3Bp3/p6n/1p3R2/3B1N2/PP2QPPP/6K1 w - - 1 0'
    },
    {
        sol: 'Rg8+',
        black: !1,
        fen: '5r1k/p2n1p1p/5P1N/1p1p4/2pP3P/8/PP4RK/8 w - - 1 0'
    },
    {
        sol: 'Qe8+',
        black: !1,
        fen: '8/7p/5pk1/3n2pq/3N1nR1/1P3P2/P6P/4QK2 w - - 1 0 '
    },
    {
        sol: 'Rxf5+',
        black: !1,
        fen: '2Q5/pp2rk1p/3p2pq/2bP1r2/5RR1/1P2P3/PB3P1P/7K w - - 1 0'
    },
    {
        sol: 'Qxh2+',
        black: !0,
        fen: '4r1k1/pQ3pp1/7p/4q3/4r3/P7/1P2nPPP/2BR1R1K b - - 0 1'
    },
    {
        sol: 'Rxf8+',
        black: !1,
        fen: '3R1rk1/1pp2pp1/1p6/8/8/P7/1q4BP/3Q2K1 w - - 1 0'
    },
    {
        sol: 'Rxg6+',
        black: !1,
        fen: '6k1/5p2/p3bRpQ/4q3/2r3P1/6NP/P1p2R1K/1r6 w - - 1 0'
    },
    {
        sol: 'Bf2+',
        black: !0,
        fen: 'rnb1k2r/pp3ppp/1qp2B2/2bPp3/4P3/2N5/PPP3PP/R2QKBNR b KQkq - 0 1'
    },
    {
        sol: 'Qxc3+',
        black: !0,
        fen: 'r2r4/pp2ppkp/2P3p1/q1p5/4PQ2/2P2b2/P4PPP/2R1KB1R b - - 0 1'
    },
    {
        sol: 'Nd4+',
        black: !1,
        fen: '8/8/2N1P3/1P6/4Q3/4b2K/4k3/4q3 w - - 1 0'
    },
    {
        sol: 'Qxh3+',
        black: !0,
        fen: '1b2r1k1/3n2p1/p3p2p/1p3r2/3PNp1q/3BnP1P/PP1BQP1K/R6R b - - 0 1'
    },
    {
        sol: 'Nf4+',
        black: !1,
        fen: '5b2/q4r1p/p3k1p1/2pNppP1/1P6/3Q1P1P/P7/1K1R4 w - - 1 0'
    },
    {
        sol: 'Qg2+',
        black: !0,
        fen: '8/2p5/Q4pk1/p1Pp4/5n2/PP3PK1/2q4N/8 b - - 0 1'
    },
    {
        sol: 'Qxh7+',
        black: !1,
        fen: 'r3nr1k/1b2Nppp/pn6/q3p1P1/P1p4Q/R7/1P2PP1P/2B2RK1 w - - 1 0'
    },
    {
        sol: 'Qh2+',
        black: !0,
        fen: 'r1b3nr/ppp1kB1p/3p4/8/3PPBnb/1Q3p2/PPP2q2/RN4RK b - - 0 1'
    },
    {
        sol: 'Qh1+',
        black: !0,
        fen: 'q5k1/5rb1/r6p/1Np1n1p1/3p1Pn1/1N4P1/PP5P/R1BQRK2 b - - 0 1'
    },
    {
        sol: 'Qxh3+',
        black: !0,
        fen: '8/2P2pk1/3Q4/4pq2/7p/6pP/2r3P1/6RK b - - 0 1'
    },
    {
        sol: 'Rxg7+',
        black: !1,
        fen: '8/p1R3p1/4p1kn/3p3N/3Pr2P/6P1/PP3K2/8 w - - 1 0'
    },
    {
        sol: 'Qd8+',
        black: !1,
        fen: 'r1b1k2r/1p2bppp/p3q3/1p2p1B1/8/3Q1N2/PPP2PPP/3R1RK1 w kq - 1 0'
    },
    {
        sol: 'Rd8+',
        black: !1,
        fen: 'rn2k2r/pp2b2p/2p1Q1p1/5B2/1q3B2/8/PPP3PP/3RR2K w kq - 1 0'
    },
    {
        sol: 'Rd8+',
        black: !1,
        fen: 'r1b1k2r/pp3ppp/2n1p3/6B1/2p1q3/Q7/PP2PPPP/3RKB1R w Kkq - 1 0'
    },
    {
        sol: 'Nd5+',
        black: !0,
        fen: '2k4r/1pp1n1pp/p1pr1pb1/4p3/Nq2P1P1/1P1PKN1P/2P1QP2/3R3R b - - 0 1'
    },
    {
        sol: 'Rc8+',
        black: !1,
        fen: '5k1r/4npp1/p3p2p/3nP2P/3P3Q/3N4/qB2KPP1/2R5 w - - 1 0'
    },
    {
        sol: 'g5+',
        black: !1,
        fen: '2r5/2R5/3npkpp/3bN3/p4PP1/4K3/P1B4P/8 w - - 1 0'
    },
    {
        sol: 'Rh4+',
        black: !1,
        fen: '5r1r/1p6/p1p2p2/2P1bPpk/4R3/6PP/P2B2K1/3R4 w - - 1 0'
    },
    {
        sol: 'Ng6+',
        black: !1,
        fen: '5qrk/5p1n/pp3p1Q/2pPp3/2P1P1rN/2P4R/P5P1/2B3K1 w - - 1 0'
    },
    {
        sol: 'Qxe6+',
        black: !1,
        fen: '3rk2r/p1qn1pp1/1p2pb1p/7P/2Pp4/B1P1QP2/P1B1KP2/3R3R w k - 1 0'
    },
    {
        sol: 'Bf7+',
        black: !1,
        fen: 'r3kb1r/q5pp/p1p1Bnn1/1p2Q3/8/2N2PBP/PPP5/2KRR3 w - - 1 0'
    },
    {
        sol: 'Ne7+',
        black: !1,
        fen: 'rq3rk1/3n1pp1/pb4n1/3N2P1/1pB1QP2/4B3/PP6/2KR3R w - - 1 0'
    },
    {
        sol: 'Nh8+',
        black: !1,
        fen: '3q2r1/p2b1k2/1pnBp1N1/3p1pQP/6P1/5R2/2r2P2/4RK2 w - - 1 0'
    },
    {
        sol: 'Rxf1+',
        black: !0,
        fen: '8/p4pk1/6p1/3R4/3nqN1P/2Q3P1/5P2/3r1BK1 b - - 0 1'
    },
    {
        sol: 'Bxg6+',
        black: !1,
        fen: '2r5/3nbkp1/2q1p1p1/1p1n2P1/3P4/2p1P1NQ/1P1B1P2/1B4KR w - - 1 0'
    },
    {
        sol: 'Nxf7+',
        black: !1,
        fen: 'r1bq1rkb/ppp2n1p/5n2/4p1NN/5pQ1/1BP5/PP3PPP/R1B1K2R w KQ - 1 0'
    },
    {
        sol: 'Re5+',
        black: !1,
        fen: '4r3/1b2r2p/p2p2k1/P1pP1R1N/3b4/1P1B3P/3n2P1/5R1K w - - 1 0'
    },
    {
        sol: 'Rf8+',
        black: !1,
        fen: '2b3k1/1p5p/2p1n1pQ/3qB3/3P4/3B3P/r5P1/5RK1 w - - 1 0'
    },
    {
        sol: 'Rxe6+',
        black: !1,
        fen: '3rk2r/1pR2p2/b2BpPp1/p2p4/8/1P6/P4PPP/4R1K1 w - - 1 0'
    },
    {
        sol: 'Rxh7+',
        black: !1,
        fen: '4nr1k/1bq3pp/5p2/1p2pNQ1/3pP3/1B1P3R/1PP3PP/6K1 w - - 1 0'
    },
    {
        sol: 'Nxb7+',
        black: !1,
        fen: 'r1bk1r2/pp1n2pp/3NQ3/1P6/8/2n2PB1/q1B3PP/3R1RK1 w - - 1 0'
    },
    {
        sol: 'Qg8+',
        black: !1,
        fen: '1rb2k2/pp3ppQ/7q/2p1n1N1/2p5/2N5/P3BP1P/K2R4 w - - 1 0'
    },
    {
        sol: 'Qxh6+',
        black: !1,
        fen: '4r3/5p1k/2p1nBpp/q2p4/P1bP4/2P1R2Q/2B2PPP/6K1 w - - 1 0'
    },
    {
        sol: 'Ra1+',
        black: !0,
        fen: '2r3k1/6pp/4pp2/3bp3/1Pq5/3R1P2/r1PQ2PP/1K1RN3 b - - 0 1'
    },
    {
        sol: 'Rh8+',
        black: !1,
        fen: '6R1/5r1k/p6b/1pB1p2q/1P6/5rQP/5P1K/6R1 w - - 1 0'
    },
    {
        sol: 'Bg6+',
        black: !1,
        fen: 'r5q1/pp1b1kr1/2p2p2/2Q5/2PpB3/1P4NP/P4P2/4RK2 w - - 1 0'
    },
    {
        sol: 'Qd8+',
        black: !1,
        fen: '2r1kb1r/p2b1ppp/3p4/Q2Np1B1/4P2P/8/PP4P1/4KB1n w k - 1 0'
    },
    {
        sol: 'Qh5+',
        black: !0,
        fen: '5rk1/ppp2pbp/3p2p1/1q6/4r1P1/1NP1B3/PP2nPP1/R2QR2K b - - 0 1'
    },
    {
        sol: 'Qxg6+',
        black: !1,
        fen: 'r2q1bk1/5n1p/2p3pP/p7/3Br3/1P3PQR/P5P1/2KR4 w - - 1 0'
    },
    {
        sol: 'Qxa3+',
        black: !0,
        fen: '2b5/k2n1p2/p2q4/5R1B/2p4P/P1b5/KPQ1R3/6r1 b - - 0 1'
    },
    {
        sol: 'Bg6+',
        black: !1,
        fen: '4Q3/r4ppk/3p3p/4pPbB/2P1P3/1q5P/6P1/3R3K w - - 1 0'
    },
    {
        sol: 'Nf4+',
        black: !1,
        fen: 'rn5r/p4pp1/3n3p/qB1k4/3P4/4P3/PP2NPPP/R4K1R w - - 1 0'
    },
    {
        sol: 'Qxc3+',
        black: !0,
        fen: 'r2r2k1/pp2bppp/2p1p3/4qb1P/8/1BP1BQ2/PP3PP1/2KR3R b - - 0 1'
    },
    {
        sol: 'Ne6+',
        black: !1,
        fen: '5R2/6k1/3K4/p6r/1p1NB3/1P4r1/8/8 w - - 1 0'
    },
    {
        sol: 'Nxf7+',
        black: !1,
        fen: '5r2/1qp2pp1/bnpk3p/4NQ2/2P5/1P5P/5PP1/4R1K1 w - - 1 0'
    },
    {
        sol: 'Rxd8+',
        black: !1,
        fen: '3nk1r1/1pq4p/p3PQpB/5p2/2r5/8/P4PPP/3RR1K1 w - - 1 0'
    },
    {
        sol: 'Ng3+',
        black: !0,
        fen: '5rk1/5ppp/pq6/1r3n2/2Q2P2/1P1N4/P1P1R1PP/4R2K b - - 0 1'
    },
    {
        sol: 'Re8+',
        black: !1,
        fen: '1k3r2/4R1Q1/p2q1r2/8/2p1Bb2/5R2/pP5P/K7 w - - 1 0'
    },
    {
        sol: 'Bxf3+',
        black: !0,
        fen: '2k1r2r/ppp3p1/3b4/3pq2b/7p/2NP1P2/PPP2Q1P/R5RK b - - 0 1'
    },
    {
        sol: 'Rh2+',
        black: !0,
        fen: '3k4/1p3Bp1/p5r1/2b5/P3P1N1/5Pp1/1P1r4/2R4K b - - 0 1'
    },
    {
        sol: 'Re8+',
        black: !1,
        fen: '6k1/1r4np/pp1p1R1B/2pP2p1/P1P5/1n5P/6P1/4R2K w - - 1 0'
    },
    {
        sol: 'Bh6',
        black: !1,
        fen: '8/p2q1p1k/4pQp1/1p1b2Bp/7P/8/5PP1/6K1 w - - 1 0'
    },
    {
        sol: 'Qb5+',
        black: !1,
        fen: 'r7/6R1/ppkqrn1B/2pp3p/P6n/2N5/8/1Q1R1K2 w - - 1 0'
    },
    {
        sol: 'Qh6+',
        black: !1,
        fen: 'r2q1k1r/3bnp2/p1n1pNp1/3pP1Qp/Pp1P4/2PB4/5PPP/R1B2RK1 w - - 1 0'
    },
    {
        sol: 'Rxh7+',
        black: !1,
        fen: '6rk/1r2pR1p/3pP1pB/2p1p3/P6Q/P1q3P1/7P/5BK1 w - - 1 0'
    },
    {
        sol: 'Rxf7+',
        black: !1,
        fen: '1r2Rr2/3P1p1k/5Rpp/qp6/2pQ4/7P/5PPK/8 w - - 1 0'
    },
    {
        sol: 'Rxf8+',
        black: !1,
        fen: 'r4rk1/5Rbp/p1qN2p1/P1n1P3/8/1Q3N1P/5PP1/5RK1 w - - 1 0'
    },
    {
        sol: 'Rh6',
        black: !1,
        fen: '7R/3r4/8/3pkp1p/5N1P/b3PK2/5P2/8 w - - 1 0'
    },
    {
        sol: 'Bf5+',
        black: !1,
        fen: '8/1R3p2/3rk2p/p2p2p1/P2P2P1/3B1PN1/5K1P/r7 w - - 1 0'
    },
    {
        sol: 'Rxh6+',
        black: !1,
        fen: '8/5prk/p5rb/P3N2R/1p1PQ2p/7P/1P3RPq/5K2 w - - 1 0'
    },
    {
        sol: 'Qe6+',
        black: !1,
        fen: 'rqb2bk1/3n2pr/p1pp2Qp/1p6/3BP2N/2N4P/PPP3P1/2KR3R w - - 1 0'
    },
    {
        sol: 'Rxa7+',
        black: !1,
        fen: '1Q6/r3R2p/k2p2pP/p1q5/Pp4P1/5P2/1PP3K1/8 w - - 1 0'
    },
    {
        sol: 'Rg2+',
        black: !0,
        fen: 'N5k1/5p2/6p1/6Pp/4bb1P/P5r1/7K/2R3R1 b - - 0 1'
    },
    {
        sol: 'Qg4+',
        black: !1,
        fen: '3R4/3Q1p2/q1rn2kp/4p3/4P3/2N3P1/5P1P/6K1 w - - 1 0'
    },
    {
        sol: 'Qh1+',
        black: !0,
        fen: '6R1/2k2P2/1n5r/3p1p2/3P3b/1QP2p1q/3R4/6K1 b - - 0 1'
    },
    {
        sol: 'g4+',
        black: !1,
        fen: '5r2/7p/3R4/p3pk2/1p2N2p/1P2BP2/6PK/4r3 w - - 1 0'
    },
    {
        sol: 'Qc6+',
        black: !1,
        fen: '7r/3kbp1p/1Q3R2/3p3q/p2P3B/1P5K/P6P/8 w - - 1 0'
    },
    {
        sol: 'Rg8+',
        black: !1,
        fen: 'r4r1k/p2p3p/bp1Np3/4P3/2P2nR1/3B1q2/P1PQ4/2K3R1 w - - 1 0'
    },
    {
        sol: 'Bf6+',
        black: !1,
        fen: '1r3b2/1bp2pkp/p1q4N/1p1n1pBn/8/2P3QP/PPB2PP1/4R1K1 w - - 1 0'
    },
    {
        sol: 'Qc6',
        black: !1,
        fen: '8/k1p1q3/Pp5Q/4p3/2P1P2p/3P4/4K3/8 w - - 1 0'
    },
    {
        sol: 'f2+',
        black: !0,
        fen: '8/pp2k3/7r/2P1p1p1/4P3/5pq1/2R3N1/1R3BK1 b - - 0 1'
    },
    {
        sol: 'Ne2+',
        black: !0,
        fen: '7k/p5b1/1p4Bp/2q1p1p1/1P1n1r2/P2Q2N1/6P1/3R2K1 b - - 0 1'
    },
    {
        sol: 'Rh6+',
        black: !1,
        fen: '8/p4q2/6k1/1p3rP1/3Q4/8/PPP5/K6R w - - 1 0'
    },
    {
        sol: 'Rc1+',
        black: !0,
        fen: '2r3k1/1p3ppp/p3p3/7P/P4P2/1R2QbP1/6q1/1B2K3 b - - 0 1'
    },
    {
        sol: 'Ne4+',
        black: !0,
        fen: '6r1/p6k/Bp3n1r/2pP1P2/P4q1P/2P2Q2/5K2/2R2R2 b - - 0 1'
    },
    {
        sol: 'Ng4',
        black: !0,
        fen: '8/8/8/5P2/R2p1N2/4n1r1/PP6/5k1K b - - 0 1'
    },
    {
        sol: 'Rf7+',
        black: !1,
        fen: 'r7/4k1Pp/2n1p2P/q2pp1N1/1p4P1/1P6/P4R2/1K1R4 w - - 1 0'
    },
    {
        sol: 'Qd8+',
        black: !1,
        fen: '2Q5/1p3p2/3b1k1p/3Pp3/4B1R1/4q1P1/r4PK1/8 w - - 1 0'
    },
    {
        sol: 'Rxh6+',
        black: !1,
        fen: '8/5Qpk/p1R4p/P2p4/6P1/2rq4/5PPK/8 w - - 1 0'
    },
    {
        sol: 'Qg7+',
        black: !1,
        fen: '3n1k2/5p2/2p1bb2/1p2pN1q/1P2P3/2P3Q1/5PB1/3R2K1 w - - 1 0'
    },
    {
        sol: 'Be5+',
        black: !1,
        fen: 'rnR5/p3p1kp/4p1pn/bpP5/5BP1/5N1P/2P2P2/2K5 w - - 1 0'
    },
    {
        sol: 'Rxh6+',
        black: !1,
        fen: '6rk/6p1/4R2p/p2pP2b/5Q2/2P2PB1/1q4PK/8 w - - 1 0'
    },
    {
        sol: 'Re4+',
        black: !0,
        fen: '1Q6/8/3p1pk1/2pP4/1p3K2/5R2/5qP1/4r3 b - - 0 1'
    },
    {
        sol: 'Nf7+',
        black: !1,
        fen: 'r4r1k/pp5p/n5p1/1q2Np1n/1Pb5/6P1/PQ2PPBP/1RB3K1 w - - 1 0'
    },
    {
        sol: 'Rxh6+',
        black: !1,
        fen: '7k/p1p2bp1/3q1N1p/4rP2/4pQ2/2P4R/P2r2PP/4R2K w - - 1 0'
    },
    {
        sol: 'Rf1+',
        black: !0,
        fen: '7k/2p3pp/p7/1p1p4/PP2pr2/B1P3qP/4N1B1/R1Qn2K1 b - - 0 1'
    },
    {
        sol: 'Rg8+',
        black: !1,
        fen: 'r1b2k2/1p1p1r1B/n4p2/p1qPp3/2P4N/4P1R1/PPQ3PP/R5K1 w - - 1 0'
    }
];

export function sniffChess() {
    const chessImage: HTMLImageElement = document.querySelector(".chess-img");
    const srcURL = chessImage.src;
    const idx = parseInt(srcURL.match(/\/puzzle(\d+)\.svg$/)[1]);
    const solution = table[idx].sol
    return solution;
}
