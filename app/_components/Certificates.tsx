'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_CERTIFICATES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certificates = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-certificates">
            <div className="container">
                <SectionTitle title="Certificates" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" ref={containerRef}>
                    {MY_CERTIFICATES.map((item) => (
                        <div
                            key={item.title}
                            className="certificate-item group relative bg-background-light/30 border border-border/40 hover:border-primary/50 hover:bg-background-light/60 p-8 rounded-xl flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md"
                        >
                            <div>
                                <p className="text-sm font-roboto-flex text-muted-foreground uppercase tracking-widest mb-2">
                                    {item.issuer}
                                </p>
                                <h4 className="text-2xl font-anton uppercase tracking-wide leading-tight group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h4>
                            </div>
                            
                            <div className="mt-8 flex justify-end">
                                <a
                                    href={item.file}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-2 text-xs font-anton uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 group/link"
                                >
                                    <span>View Certificate</span>
                                    <ExternalLink size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
