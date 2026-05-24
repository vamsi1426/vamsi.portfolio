import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Leaves configuration
    const leaves = [];
    const leafColors = [
      "rgba(78, 138, 66, 0.22)", // Soft leaf green
      "rgba(43, 81, 41, 0.18)",  // Deep forest green
      "rgba(255, 176, 26, 0.18)", // Warm mango gold
      "rgba(255, 142, 83, 0.14)", // Soft warm orange
    ];
    const leafCount = Math.min(30, Math.floor((width * height) / 45000)); // Responsive count

    // Glowing dust particles configuration
    const dustParticles = [];
    const dustCount = Math.min(25, Math.floor((width * height) / 60000));

    // Mouse wind interaction state
    const mouse = {
      x: null,
      y: null,
      prevX: null,
      prevY: null,
      vx: 0,
      vy: 0,
      radius: 180,
    };

    class Leaf {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -50;
        this.size = Math.random() * 12 + 10; // size of leaf
        this.vx = Math.random() * 0.8 - 0.4 + 0.2; // slight drift to right
        this.vy = Math.random() * 0.5 + 0.6; // gentle fall
        this.angle = Math.random() * Math.PI * 2;
        this.spinSpeed = Math.random() * 0.015 - 0.0075 + 0.003;
        this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
        this.swayRange = Math.random() * 0.8 + 0.4;
        this.swaySpeed = Math.random() * 0.01 + 0.005;
        this.swayOffset = Math.random() * 100;
        this.windForceX = 0;
        this.windForceY = 0;
      }

      update() {
        // Natural sway calculation
        const sway = Math.sin(Date.now() * this.swaySpeed + this.swayOffset) * this.swayRange;
        
        // Mouse force interaction
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.5;
            
            // Add mouse velocity influence + radial repulsion
            this.windForceX += (dx / dist) * force + mouse.vx * 0.15;
            this.windForceY += (dy / dist) * force * 0.5 + mouse.vy * 0.15;
          }
        }

        // Apply forces with drag damping
        this.x += this.vx + sway + this.windForceX;
        this.y += this.vy + this.windForceY;
        this.angle += this.spinSpeed + Math.abs(this.windForceX) * 0.01;

        // Damp wind forces
        this.windForceX *= 0.93;
        this.windForceY *= 0.93;

        // Wrap around limits
        if (this.y > height + 50) {
          this.reset();
        }
        if (this.x < -50) {
          this.x = width + 30;
        } else if (this.x > width + 50) {
          this.x = -30;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.fillStyle = this.color;
        ctx.strokeStyle = "rgba(77, 56, 38, 0.05)";
        ctx.lineWidth = 1;

        // Draw organic double-curved leaf path
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        // Right side
        ctx.quadraticCurveTo(this.size * 0.65, -this.size * 0.3, 0, this.size);
        // Left side
        ctx.quadraticCurveTo(-this.size * 0.65, -this.size * 0.3, 0, -this.size);
        ctx.fill();
        ctx.stroke();

        // Draw stem vein
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.lineTo(0, this.size * 1.2);
        ctx.stroke();

        ctx.restore();
      }
    }

    class DustParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 20;
        this.size = Math.random() * 2 + 1;
        this.vy = -(Math.random() * 0.4 + 0.2); // slowly float up
        this.vx = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = `rgba(255, 195, 0, ${this.opacity})`; // golden glow
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulseOffset = Math.random() * 100;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;

        // Subtle alpha pulse
        const currentOpacity = this.opacity + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.08;
        this.color = `rgba(255, 195, 0, ${Math.max(0.05, Math.min(0.6, currentOpacity))})`;

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = "rgba(255, 195, 0, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fill();
        // Reset shadow
        ctx.shadowBlur = 0;
      }
    }

    // Populate
    for (let i = 0; i < leafCount; i++) {
      leaves.push(new Leaf());
    }
    for (let i = 0; i < dustCount; i++) {
      dustParticles.push(new DustParticle());
    }

    const animate = () => {
      // Create a premium, soft sunrise background gradient on the fly
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#FAF8F4"); // Cream base
      grad.addColorStop(0.5, "#F8F3E5"); // Soft warm sand
      grad.addColorStop(1, "#EBF4F7"); // Subtle sky blue hint
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render dust underneath
      dustParticles.forEach((dust) => {
        dust.update();
        dust.draw();
      });

      // Render leaves above
      leaves.forEach((leaf) => {
        leaf.update();
        leaf.draw();
      });

      // Reset mouse velocity
      if (mouse.prevX !== null && mouse.prevY !== null) {
        mouse.vx *= 0.85;
        mouse.vy *= 0.85;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (mouse.x === null) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        mouse.prevX = mouse.x;
        mouse.prevY = mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        // Calculate instantaneous velocity of the cursor
        mouse.vx = mouse.x - mouse.prevX;
        mouse.vy = mouse.y - mouse.prevY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.prevX = null;
      mouse.prevY = null;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Update sizes based on viewport resizing
      const newLeafCount = Math.min(30, Math.floor((width * height) / 45000));
      while (leaves.length < newLeafCount) leaves.push(new Leaf());
      while (leaves.length > newLeafCount) leaves.pop();
    };

    // Add listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Run loop
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
